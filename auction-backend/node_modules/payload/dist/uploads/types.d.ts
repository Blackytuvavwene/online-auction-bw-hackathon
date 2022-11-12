/// <reference types="node" />
import express from 'express';
import serveStatic from 'serve-static';
import { Sharp, ResizeOptions } from 'sharp';
export declare type FileSize = {
    filename: string;
    filesize: number;
    mimeType: string;
    name: string;
    width: number;
    height: number;
    crop: string;
};
export declare type FileSizes = {
    [size: string]: FileSize;
};
export declare type FileData = {
    filename: string;
    filesize: number;
    mimeType: string;
    width: number;
    height: number;
    sizes: FileSizes;
};
/**
 * Params sent to the sharp toFormat() function
 * @link https://sharp.pixelplumbing.com/api-output#toformat
 */
export declare type ImageUploadFormatOptions = {
    format: Parameters<Sharp['toFormat']>[0];
    options?: Parameters<Sharp['toFormat']>[1];
};
export declare type ImageSize = ResizeOptions & {
    name: string;
    formatOptions?: ImageUploadFormatOptions;
    /**
     * @deprecated prefer position
     */
    crop?: string;
};
export declare type GetAdminThumbnail = (args: {
    doc: Record<string, unknown>;
}) => string;
export declare type IncomingUploadType = {
    imageSizes?: ImageSize[];
    staticURL?: string;
    staticDir?: string;
    disableLocalStorage?: boolean;
    adminThumbnail?: string | GetAdminThumbnail;
    mimeTypes?: string[];
    staticOptions?: serveStatic.ServeStaticOptions<express.Response<any, Record<string, any>>>;
    handlers?: any[];
    resizeOptions?: ResizeOptions;
    formatOptions?: ImageUploadFormatOptions;
};
export declare type Upload = {
    imageSizes?: ImageSize[];
    staticURL: string;
    staticDir: string;
    disableLocalStorage: boolean;
    adminThumbnail?: string | GetAdminThumbnail;
    mimeTypes?: string[];
    staticOptions?: serveStatic.ServeStaticOptions<express.Response<any, Record<string, any>>>;
    handlers?: any[];
    resizeOptions?: ResizeOptions;
    formatOptions?: ImageUploadFormatOptions;
};
export declare type File = {
    data: Buffer;
    mimetype: string;
    name: string;
    size: number;
};
export declare type FileToSave = {
    buffer: Buffer;
    path: string;
};
