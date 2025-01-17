window.languagePluginUrl = 'https://pyodide-cdn2.iodide.io/v0.15.0/full/'
class CellManager {
    constructor() {
        this.pyodide = new PyodideWrapper();
    }
    handleRunCommand(el) {
        var cell = el.closest('.Cell');
        var cm = cell.querySelector('.CodeMirror').CodeMirror;
        this.evalCell(cell, cm);
    }
    evalCell(cell, cm) {
        var cellType = cell.dataset['type'];
        switch (cellType) {
            case 'python':
                this.pyodide.runPython(cm);
                break;
            case 'markdown':
                this.runMarkdownCell(cell,cm);
                break;
            case 'c++':
                console.log(cm.getValue());
                break;
            default:
                break;
        }
    }
    run
    runMarkdownCell(cell,cm){
        cell.querySelector(".jp-MarkdownOutput").innerHTML=marked(cm.getValue());
        cell.querySelector('.Cell-MarkdownSource').style.display='none';
        cell.querySelector('.jp-MarkdownOutput').style.display='';
    }
}

class Cell {
    constructor(type) {
        this.type = type;
    }
}