export class FileDownloader {
    static download(file) {
        const link = document.createElement('A');
        const url = URL.createObjectURL(file, 'text/html');

        link.href = url;
        link.download = file.name;

        link.click();
    }
}