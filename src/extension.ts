import * as open from 'open';
import * as path from 'path';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('vscode-context.openLocalHost', () => {
    const currentFilePath = vscode.window.activeTextEditor?.document.fileName;
    if (currentFilePath) {
      const filename = path.basename(currentFilePath, '.ejs');
      const url = `http://localhost:3000/${filename}.html`;
      vscode.window.showInformationMessage(url);
      open(url);
    }
  });

  context.subscriptions.push(disposable);
}
