"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const findByID_1 = __importDefault(require("../../collections/operations/findByID"));
const getExtractJWT_1 = __importDefault(require("../getExtractJWT"));
const JwtStrategy = passport_jwt_1.default.Strategy;
exports.default = ({ secret, config, collections }) => {
    const opts = {
        passReqToCallback: true,
        jwtFromRequest: (0, getExtractJWT_1.default)(config),
        secretOrKey: secret,
    };
    return new JwtStrategy(opts, async (req, token, done) => {
        if (req.user) {
            done(null, req.user);
        }
        try {
            const collection = collections[token.collection];
            const parsedURL = url_1.default.parse(req.url);
            const isGraphQL = parsedURL.pathname === config.routes.graphQL;
            const user = await (0, findByID_1.default)({
                id: token.id,
                collection,
                req,
                overrideAccess: true,
                depth: isGraphQL ? 0 : collection.config.auth.depth,
            });
            if (user && (!collection.config.auth.verify || user._verified)) {
                user.collection = collection.config.slug;
                user._strategy = 'local-jwt';
                done(null, user);
            }
            else {
                done(null, false);
            }
        }
        catch (err) {
            done(null, false);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F1dGgvc3RyYXRlZ2llcy9qd3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4Q0FBc0I7QUFDdEIsZ0VBQTREO0FBRzVELHFGQUE2RDtBQUM3RCxxRUFBNkM7QUFFN0MsTUFBTSxXQUFXLEdBQUcsc0JBQVcsQ0FBQyxRQUFRLENBQUM7QUFFekMsa0JBQWUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFXLEVBQW9CLEVBQUU7SUFDNUUsTUFBTSxJQUFJLEdBQW9CO1FBQzVCLGlCQUFpQixFQUFFLElBQUk7UUFDdkIsY0FBYyxFQUFFLElBQUEsdUJBQWEsRUFBQyxNQUFNLENBQUM7UUFDckMsV0FBVyxFQUFFLE1BQU07S0FDcEIsQ0FBQztJQUVGLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ3RELElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsSUFBSTtZQUNGLE1BQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFakQsTUFBTSxTQUFTLEdBQUcsYUFBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUUvRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUEsa0JBQVEsRUFBQztnQkFDMUIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNaLFVBQVU7Z0JBQ1YsR0FBRztnQkFDSCxjQUFjLEVBQUUsSUFBSTtnQkFDcEIsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3BELENBQUMsQ0FBQztZQUVILElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNsQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbkI7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9