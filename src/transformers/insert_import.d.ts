import * as ts from 'typescript';
import { TransformOperation } from './make_transform';
export declare function insertStarImport(sourceFile: ts.SourceFile, identifier: ts.Identifier, modulePath: string): TransformOperation[];
export declare function insertImport(sourceFile: ts.SourceFile, symbolName: string, modulePath: string): TransformOperation[];
