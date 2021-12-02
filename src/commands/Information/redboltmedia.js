const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('redboltmedia')
		.setDescription("Dowiedz się więcej o twórcach Witchercraft'a!"),
	async execute(interaction) {
		await interaction.reply('Red Bolt Media to blablabla kurwa pizda szmata chuj.');
	},
};