const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sklep')
		.setDescription('Wykup abonament, który pozwoli Ci grać w WitcherCraft!'),
	async execute(interaction) {
		await interaction.reply('https://www.xbox.com/pl-PL/xbox-game-pass/pc-games');
	},
};