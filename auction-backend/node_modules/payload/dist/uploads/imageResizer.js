"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const file_type_1 = require("file-type");
const fs_1 = __importDefault(require("fs"));
const sanitize_filename_1 = __importDefault(require("sanitize-filename"));
const sharp_1 = __importDefault(require("sharp"));
const fileExists_1 = __importDefault(require("./fileExists"));
function getOutputImage(sourceImage, size) {
    const extension = sourceImage.split('.').pop();
    const name = (0, sanitize_filename_1.default)(sourceImage.substring(0, sourceImage.lastIndexOf('.')) || sourceImage);
    return {
        name,
        extension,
        width: size.width,
        height: size.height,
    };
}
async function resizeAndSave({ req, file, dimensions, staticPath, config, savedFilename, }) {
    const { imageSizes } = config.upload;
    const sizesToSave = [];
    const sizes = imageSizes
        .filter((desiredSize) => needsResize(desiredSize, dimensions))
        .map(async (desiredSize) => {
        let resized = (0, sharp_1.default)(file).resize(desiredSize);
        if (desiredSize.formatOptions) {
            resized = resized.toFormat(desiredSize.formatOptions.format, desiredSize.formatOptions.options);
        }
        const bufferObject = await resized.toBuffer({
            resolveWithObject: true,
        });
        req.payloadUploadSizes[desiredSize.name] = bufferObject.data;
        const mimeType = (await (0, file_type_1.fromBuffer)(bufferObject.data));
        const outputImage = getOutputImage(savedFilename, desiredSize);
        const imageNameWithDimensions = createImageName(outputImage, bufferObject, mimeType.ext);
        const imagePath = `${staticPath}/${imageNameWithDimensions}`;
        const fileAlreadyExists = await (0, fileExists_1.default)(imagePath);
        if (fileAlreadyExists) {
            fs_1.default.unlinkSync(imagePath);
        }
        sizesToSave.push({
            path: imagePath,
            buffer: bufferObject.data,
        });
        return {
            name: desiredSize.name,
            width: bufferObject.info.width,
            height: bufferObject.info.height,
            filename: imageNameWithDimensions,
            filesize: bufferObject.info.size,
            mimeType: mimeType.mime,
        };
    });
    const savedSizes = await Promise.all(sizes);
    return {
        sizeData: savedSizes.reduce((results, size) => ({
            ...results,
            [size.name]: {
                width: size.width,
                height: size.height,
                filename: size.filename,
                mimeType: size.mimeType,
                filesize: size.filesize,
            },
        }), {}),
        sizesToSave,
    };
}
exports.default = resizeAndSave;
function createImageName(outputImage, bufferObject, extension) {
    return `${outputImage.name}-${bufferObject.info.width}x${bufferObject.info.height}.${extension}`;
}
function needsResize(desiredSize, dimensions) {
    return (typeof desiredSize.width === 'number' && desiredSize.width <= dimensions.width)
        || (typeof desiredSize.height === 'number' && desiredSize.height <= dimensions.height);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VSZXNpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3VwbG9hZHMvaW1hZ2VSZXNpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEseUNBQXVDO0FBQ3ZDLDRDQUFvQjtBQUNwQiwwRUFBeUM7QUFDekMsa0RBQTBCO0FBRzFCLDhEQUFzQztBQTBCdEMsU0FBUyxjQUFjLENBQUMsV0FBbUIsRUFBRSxJQUFlO0lBQzFELE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDL0MsTUFBTSxJQUFJLEdBQUcsSUFBQSwyQkFBUSxFQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQztJQUU3RixPQUFPO1FBQ0wsSUFBSTtRQUNKLFNBQVM7UUFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO0tBQ3BCLENBQUM7QUFDSixDQUFDO0FBRWMsS0FBSyxVQUFVLGFBQWEsQ0FBQyxFQUMxQyxHQUFHLEVBQ0gsSUFBSSxFQUNKLFVBQVUsRUFDVixVQUFVLEVBQ1YsTUFBTSxFQUNOLGFBQWEsR0FDUjtJQUNMLE1BQU0sRUFBRSxVQUFVLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3JDLE1BQU0sV0FBVyxHQUFpQixFQUFFLENBQUM7SUFFckMsTUFBTSxLQUFLLEdBQUcsVUFBVTtTQUNyQixNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDN0QsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRTtRQUN6QixJQUFJLE9BQU8sR0FBRyxJQUFBLGVBQUssRUFBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsSUFBSSxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDakc7UUFFRCxNQUFNLFlBQVksR0FBRyxNQUFNLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDMUMsaUJBQWlCLEVBQUUsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFN0QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFNLElBQUEsc0JBQVUsRUFBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RCxNQUFNLFdBQVcsR0FBRyxjQUFjLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sdUJBQXVCLEdBQUcsZUFBZSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pGLE1BQU0sU0FBUyxHQUFHLEdBQUcsVUFBVSxJQUFJLHVCQUF1QixFQUFFLENBQUM7UUFDN0QsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLElBQUEsb0JBQVUsRUFBQyxTQUFTLENBQUMsQ0FBQztRQUV0RCxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLFlBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUI7UUFFRCxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLFNBQVM7WUFDZixNQUFNLEVBQUUsWUFBWSxDQUFDLElBQUk7U0FDMUIsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSTtZQUN0QixLQUFLLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQzlCLE1BQU0sRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDaEMsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ2hDLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN4QixDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFFTCxNQUFNLFVBQVUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFNUMsT0FBTztRQUNMLFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUN6QixDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEIsR0FBRyxPQUFPO1lBQ1YsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDLEVBQ0YsRUFBRSxDQUNIO1FBQ0QsV0FBVztLQUNaLENBQUM7QUFDSixDQUFDO0FBckVELGdDQXFFQztBQUNELFNBQVMsZUFBZSxDQUN0QixXQUF3QixFQUN4QixZQUFzRCxFQUN0RCxTQUFpQjtJQUVqQixPQUFPLEdBQUcsV0FBVyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUUsQ0FBQztBQUNuRyxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsV0FBc0IsRUFBRSxVQUEyQjtJQUN0RSxPQUFPLENBQUMsT0FBTyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsSUFBSSxXQUFXLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUM7V0FDbEYsQ0FBQyxPQUFPLFdBQVcsQ0FBQyxNQUFNLEtBQUssUUFBUSxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNGLENBQUMifQ==