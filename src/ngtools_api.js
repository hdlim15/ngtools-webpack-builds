"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
exports.DEFAULT_ERROR_CODE = 100;
exports.UNKNOWN_ERROR_CODE = 500;
exports.SOURCE = 'angular';
function _error(api, fn) {
    throw new Error('Could not find API ' + api + ', function ' + fn);
}
function getApiMember(api, func, apiName) {
    return api && api[func] || _error(apiName, func.toString());
}
// Manually check for Compiler CLI availability and supported version.
// This is needed because @ngtools/webpack does not depend directly on @angular/compiler-cli, since
// it is installed as part of global Angular CLI installs and compiler-cli is not of its
// dependencies.
function CompilerCliIsSupported() {
    let version;
    // Check that Angular is available.
    try {
        version = require('@angular/compiler-cli').VERSION;
    }
    catch (e) {
        throw new Error('The "@angular/compiler-cli" package was not properly installed. Error: ' + e);
    }
    // Check that Angular is also not part of this module's node_modules (it should be the project's).
    const compilerCliPath = require.resolve('@angular/compiler-cli');
    if (compilerCliPath.startsWith(path.dirname(__dirname))) {
        throw new Error('The @ngtools/webpack plugin now relies on the project @angular/compiler-cli. '
            + 'Please clean your node_modules and reinstall.');
    }
    // Throw if we're less than 5.x
    if (Number(version.major) < 5) {
        throw new Error('Version of @angular/compiler-cli needs to be 5.0.0 or greater. '
            + `Current version is "${version.full}".`);
    }
}
exports.CompilerCliIsSupported = CompilerCliIsSupported;
// These imports do not exist on a global install for Angular CLI, so we cannot use a static ES6
// import.
let compilerCli = null;
try {
    compilerCli = require('@angular/compiler-cli');
}
catch (_a) {
    // Don't throw an error if the private API does not exist.
    // Instead, the `CompilerCliIsSupported` method should return throw and indicate the
    // plugin cannot be used.
}
exports.VERSION = getApiMember(compilerCli, 'VERSION', 'compiler-cli');
exports.__NGTOOLS_PRIVATE_API_2 = getApiMember(compilerCli, '__NGTOOLS_PRIVATE_API_2', 'compiler-cli');
exports.readConfiguration = getApiMember(compilerCli, 'readConfiguration', 'compiler-cli');
// These imports do not exist on Angular versions lower than 5, so we cannot use a static ES6
// import.
let ngtools2 = null;
try {
    ngtools2 = require('@angular/compiler-cli/ngtools2');
}
catch (_b) {
    // Don't throw an error if the private API does not exist.
}
exports.createProgram = getApiMember(ngtools2, 'createProgram', 'ngtools2');
exports.createCompilerHost = getApiMember(ngtools2, 'createCompilerHost', 'ngtools2');
exports.formatDiagnostics = getApiMember(ngtools2, 'formatDiagnostics', 'ngtools2');
exports.EmitFlags = getApiMember(ngtools2, 'EmitFlags', 'ngtools2');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd0b29sc19hcGkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBhY2thZ2VzL25ndG9vbHMvd2VicGFjay9zcmMvbmd0b29sc19hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFhQSw2QkFBNkI7QUFHaEIsUUFBQSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7QUFDekIsUUFBQSxrQkFBa0IsR0FBRyxHQUFHLENBQUM7QUFDekIsUUFBQSxNQUFNLEdBQUcsU0FBc0IsQ0FBQztBQVE3QyxnQkFBZ0IsR0FBVyxFQUFFLEVBQVU7SUFDckMsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3BFLENBQUM7QUFFRCxzQkFDRSxHQUFhLEVBQ2IsSUFBTyxFQUNQLE9BQWU7SUFFZixNQUFNLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRCxzRUFBc0U7QUFDdEUsbUdBQW1HO0FBQ25HLHdGQUF3RjtBQUN4RixnQkFBZ0I7QUFDaEI7SUFDRSxJQUFJLE9BQU8sQ0FBQztJQUVaLG1DQUFtQztJQUNuQyxJQUFJLENBQUM7UUFDSCxPQUFPLEdBQUksT0FBTyxDQUFDLHVCQUF1QixDQUFnQixDQUFDLE9BQU8sQ0FBQztJQUNyRSxDQUFDO0lBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMseUVBQXlFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVELGtHQUFrRztJQUNsRyxNQUFNLGVBQWUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDakUsRUFBRSxDQUFDLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sSUFBSSxLQUFLLENBQUMsK0VBQStFO2NBQzNGLCtDQUErQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELCtCQUErQjtJQUMvQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpRUFBaUU7Y0FDN0UsdUJBQXVCLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7QUFDSCxDQUFDO0FBdEJELHdEQXNCQztBQUVELGdHQUFnRztBQUNoRyxVQUFVO0FBQ1YsSUFBSSxXQUFXLEdBQXNCLElBQUksQ0FBQztBQUMxQyxJQUFJLENBQUM7SUFDSCxXQUFXLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDakQsQ0FBQztBQUFDLEtBQUssQ0FBQyxDQUFDLElBQUQsQ0FBQztJQUNQLDBEQUEwRDtJQUMxRCxvRkFBb0Y7SUFDcEYseUJBQXlCO0FBQzNCLENBQUM7QUFFWSxRQUFBLE9BQU8sR0FBdUIsWUFBWSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDbkYsUUFBQSx1QkFBdUIsR0FBRyxZQUFZLENBQ2pELFdBQVcsRUFDWCx5QkFBeUIsRUFDekIsY0FBYyxDQUNmLENBQUM7QUFDVyxRQUFBLGlCQUFpQixHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFFaEcsNkZBQTZGO0FBQzdGLFVBQVU7QUFDVixJQUFJLFFBQVEsR0FBMEIsSUFBSSxDQUFDO0FBQzNDLElBQUksQ0FBQztJQUNILFFBQVEsR0FBRyxPQUFPLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBQUMsS0FBSyxDQUFDLENBQUMsSUFBRCxDQUFDO0lBQ1AsMERBQTBEO0FBQzVELENBQUM7QUFFWSxRQUFBLGFBQWEsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNwRSxRQUFBLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDOUUsUUFBQSxpQkFBaUIsR0FBRyxZQUFZLENBQUMsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzVFLFFBQUEsU0FBUyxHQUFHLFlBQVksQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuLy8gV2UgZGlzYWJsZSBpbXBsaWNpdCBkZXBlbmRlbmNjaWVzIGJlY2F1c2UgdGhvc2UgYXJlIG9ubHkgZm9yIHR5cGluZ3MgYW5kIGRvbid0IGhhdmUgYSBydW50aW1lXG4vLyBlcXVpdmFsZW50LlxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWdsb2JhbC10c2xpbnQtZGlzYWJsZVxuLy8gdHNsaW50OmRpc2FibGU6bm8taW1wbGljaXQtZGVwZW5kZW5jaWVzXG5pbXBvcnQgKiBhcyBuZ2MgZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpJztcbmltcG9ydCAqIGFzIG5ndG9vbHMgZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXItY2xpL25ndG9vbHMyJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB0cyBmcm9tICd0eXBlc2NyaXB0JztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JfQ09ERSA9IDEwMDtcbmV4cG9ydCBjb25zdCBVTktOT1dOX0VSUk9SX0NPREUgPSA1MDA7XG5leHBvcnQgY29uc3QgU09VUkNFID0gJ2FuZ3VsYXInIGFzICdhbmd1bGFyJztcblxuZXhwb3J0IHR5cGUgQ29tcGlsZXJPcHRpb25zID0gbmdjLkNvbXBpbGVyT3B0aW9ucztcbmV4cG9ydCB0eXBlIENvbXBpbGVySG9zdCA9IG5ndG9vbHMuQ29tcGlsZXJIb3N0O1xuZXhwb3J0IHR5cGUgUHJvZ3JhbSA9IG5ndG9vbHMuUHJvZ3JhbTtcbmV4cG9ydCB0eXBlIERpYWdub3N0aWMgPSBuZ3Rvb2xzLkRpYWdub3N0aWM7XG5leHBvcnQgdHlwZSBEaWFnbm9zdGljcyA9IFJlYWRvbmx5QXJyYXk8dHMuRGlhZ25vc3RpYyB8IERpYWdub3N0aWM+O1xuXG5mdW5jdGlvbiBfZXJyb3IoYXBpOiBzdHJpbmcsIGZuOiBzdHJpbmcpOiBuZXZlciB7XG4gIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgQVBJICcgKyBhcGkgKyAnLCBmdW5jdGlvbiAnICsgZm4pO1xufVxuXG5mdW5jdGlvbiBnZXRBcGlNZW1iZXI8VCwgSyBleHRlbmRzIGtleW9mIFQ+KFxuICBhcGk6IFQgfCBudWxsLFxuICBmdW5jOiBLLFxuICBhcGlOYW1lOiBzdHJpbmcsXG4pOiBUW0tdIHtcbiAgcmV0dXJuIGFwaSAmJiBhcGlbZnVuY10gfHwgX2Vycm9yKGFwaU5hbWUsIGZ1bmMudG9TdHJpbmcoKSk7XG59XG5cbi8vIE1hbnVhbGx5IGNoZWNrIGZvciBDb21waWxlciBDTEkgYXZhaWxhYmlsaXR5IGFuZCBzdXBwb3J0ZWQgdmVyc2lvbi5cbi8vIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgQG5ndG9vbHMvd2VicGFjayBkb2VzIG5vdCBkZXBlbmQgZGlyZWN0bHkgb24gQGFuZ3VsYXIvY29tcGlsZXItY2xpLCBzaW5jZVxuLy8gaXQgaXMgaW5zdGFsbGVkIGFzIHBhcnQgb2YgZ2xvYmFsIEFuZ3VsYXIgQ0xJIGluc3RhbGxzIGFuZCBjb21waWxlci1jbGkgaXMgbm90IG9mIGl0c1xuLy8gZGVwZW5kZW5jaWVzLlxuZXhwb3J0IGZ1bmN0aW9uIENvbXBpbGVyQ2xpSXNTdXBwb3J0ZWQoKSB7XG4gIGxldCB2ZXJzaW9uO1xuXG4gIC8vIENoZWNrIHRoYXQgQW5ndWxhciBpcyBhdmFpbGFibGUuXG4gIHRyeSB7XG4gICAgdmVyc2lvbiA9IChyZXF1aXJlKCdAYW5ndWxhci9jb21waWxlci1jbGknKSBhcyB0eXBlb2YgbmdjKS5WRVJTSU9OO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgXCJAYW5ndWxhci9jb21waWxlci1jbGlcIiBwYWNrYWdlIHdhcyBub3QgcHJvcGVybHkgaW5zdGFsbGVkLiBFcnJvcjogJyArIGUpO1xuICB9XG5cbiAgLy8gQ2hlY2sgdGhhdCBBbmd1bGFyIGlzIGFsc28gbm90IHBhcnQgb2YgdGhpcyBtb2R1bGUncyBub2RlX21vZHVsZXMgKGl0IHNob3VsZCBiZSB0aGUgcHJvamVjdCdzKS5cbiAgY29uc3QgY29tcGlsZXJDbGlQYXRoID0gcmVxdWlyZS5yZXNvbHZlKCdAYW5ndWxhci9jb21waWxlci1jbGknKTtcbiAgaWYgKGNvbXBpbGVyQ2xpUGF0aC5zdGFydHNXaXRoKHBhdGguZGlybmFtZShfX2Rpcm5hbWUpKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIEBuZ3Rvb2xzL3dlYnBhY2sgcGx1Z2luIG5vdyByZWxpZXMgb24gdGhlIHByb2plY3QgQGFuZ3VsYXIvY29tcGlsZXItY2xpLiAnXG4gICAgICArICdQbGVhc2UgY2xlYW4geW91ciBub2RlX21vZHVsZXMgYW5kIHJlaW5zdGFsbC4nKTtcbiAgfVxuXG4gIC8vIFRocm93IGlmIHdlJ3JlIGxlc3MgdGhhbiA1LnhcbiAgaWYgKE51bWJlcih2ZXJzaW9uLm1ham9yKSA8IDUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZlcnNpb24gb2YgQGFuZ3VsYXIvY29tcGlsZXItY2xpIG5lZWRzIHRvIGJlIDUuMC4wIG9yIGdyZWF0ZXIuICdcbiAgICAgICsgYEN1cnJlbnQgdmVyc2lvbiBpcyBcIiR7dmVyc2lvbi5mdWxsfVwiLmApO1xuICB9XG59XG5cbi8vIFRoZXNlIGltcG9ydHMgZG8gbm90IGV4aXN0IG9uIGEgZ2xvYmFsIGluc3RhbGwgZm9yIEFuZ3VsYXIgQ0xJLCBzbyB3ZSBjYW5ub3QgdXNlIGEgc3RhdGljIEVTNlxuLy8gaW1wb3J0LlxubGV0IGNvbXBpbGVyQ2xpOiB0eXBlb2YgbmdjIHwgbnVsbCA9IG51bGw7XG50cnkge1xuICBjb21waWxlckNsaSA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaScpO1xufSBjYXRjaCB7XG4gIC8vIERvbid0IHRocm93IGFuIGVycm9yIGlmIHRoZSBwcml2YXRlIEFQSSBkb2VzIG5vdCBleGlzdC5cbiAgLy8gSW5zdGVhZCwgdGhlIGBDb21waWxlckNsaUlzU3VwcG9ydGVkYCBtZXRob2Qgc2hvdWxkIHJldHVybiB0aHJvdyBhbmQgaW5kaWNhdGUgdGhlXG4gIC8vIHBsdWdpbiBjYW5ub3QgYmUgdXNlZC5cbn1cblxuZXhwb3J0IGNvbnN0IFZFUlNJT046IHR5cGVvZiBuZ2MuVkVSU0lPTiA9IGdldEFwaU1lbWJlcihjb21waWxlckNsaSwgJ1ZFUlNJT04nLCAnY29tcGlsZXItY2xpJyk7XG5leHBvcnQgY29uc3QgX19OR1RPT0xTX1BSSVZBVEVfQVBJXzIgPSBnZXRBcGlNZW1iZXIoXG4gIGNvbXBpbGVyQ2xpLFxuICAnX19OR1RPT0xTX1BSSVZBVEVfQVBJXzInLFxuICAnY29tcGlsZXItY2xpJyxcbik7XG5leHBvcnQgY29uc3QgcmVhZENvbmZpZ3VyYXRpb24gPSBnZXRBcGlNZW1iZXIoY29tcGlsZXJDbGksICdyZWFkQ29uZmlndXJhdGlvbicsICdjb21waWxlci1jbGknKTtcblxuLy8gVGhlc2UgaW1wb3J0cyBkbyBub3QgZXhpc3Qgb24gQW5ndWxhciB2ZXJzaW9ucyBsb3dlciB0aGFuIDUsIHNvIHdlIGNhbm5vdCB1c2UgYSBzdGF0aWMgRVM2XG4vLyBpbXBvcnQuXG5sZXQgbmd0b29sczI6IHR5cGVvZiBuZ3Rvb2xzIHwgbnVsbCA9IG51bGw7XG50cnkge1xuICBuZ3Rvb2xzMiA9IHJlcXVpcmUoJ0Bhbmd1bGFyL2NvbXBpbGVyLWNsaS9uZ3Rvb2xzMicpO1xufSBjYXRjaCB7XG4gIC8vIERvbid0IHRocm93IGFuIGVycm9yIGlmIHRoZSBwcml2YXRlIEFQSSBkb2VzIG5vdCBleGlzdC5cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2dyYW0gPSBnZXRBcGlNZW1iZXIobmd0b29sczIsICdjcmVhdGVQcm9ncmFtJywgJ25ndG9vbHMyJyk7XG5leHBvcnQgY29uc3QgY3JlYXRlQ29tcGlsZXJIb3N0ID0gZ2V0QXBpTWVtYmVyKG5ndG9vbHMyLCAnY3JlYXRlQ29tcGlsZXJIb3N0JywgJ25ndG9vbHMyJyk7XG5leHBvcnQgY29uc3QgZm9ybWF0RGlhZ25vc3RpY3MgPSBnZXRBcGlNZW1iZXIobmd0b29sczIsICdmb3JtYXREaWFnbm9zdGljcycsICduZ3Rvb2xzMicpO1xuZXhwb3J0IGNvbnN0IEVtaXRGbGFncyA9IGdldEFwaU1lbWJlcihuZ3Rvb2xzMiwgJ0VtaXRGbGFncycsICduZ3Rvb2xzMicpO1xuIl19