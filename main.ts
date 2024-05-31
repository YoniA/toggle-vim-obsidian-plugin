import { Plugin } from 'obsidian';


export default class ToggleVimModePlugin extends Plugin {

  onload() {
		console.log('Toggle Vim mode plugin loaded.');

		// toggle by command action
    this.addCommand({
      id: "toggle-vim-mode",
      name: "Toggle",
      callback: () => this.toggleVim()
    });

		// toggle by ribbon action
		this.addRibbonIcon("keyboard", "Toggle Vim mode", () => this.toggleVim());
	}

  toggleVim() {
    // @ts-expect-error
    this.app.vault.setConfig('vimMode', !this.app.vault.getConfig('vimMode'));
  }
}
