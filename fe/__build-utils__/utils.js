const fs = require('fs');
const path = require('path');

/**
 * @param dir 대상 디렉토리
 * @param aFilesPath 재귀를 위해 사용하는 파일 배열
 * @returns {Array} 디렉토리의 파일목록
 */
function getFileList(dir, arrFilesPath) {
    const aFilesPath = arrFilesPath || [];

    if (!fs.existsSync(dir)) {
        return aFilesPath;
    }

    fs.readdirSync(dir).forEach(function(list) {
        const listpath = path.join(dir, list);
        const bIsDirectory = fs.statSync(listpath).isDirectory();
        if (bIsDirectory) {
            // getFileList(listpath, aFilesPath);
        } else {
            aFilesPath.push(listpath);
        }
    });

    return aFilesPath;
}

/**
 * @param   {string} dir 대상 디렉토리
 * @returns {Array} ttf 파일 목록
 */
function getFileListByExt(dir, ext) {
    return getFileList(dir).filter(function(filepath) {
        if(new RegExp('.' + ext + '$', 'gi').test(path.extname(filepath))) {
            return filepath;
        }
    });
}

module.exports = {
    getFileList: getFileList,
    getFileListByExt: getFileListByExt
};
