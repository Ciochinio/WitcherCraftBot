const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('strona')
		.setDescription("Odwiedź oficjalną stronę WitcherCraft'a!"),
	async execute(interaction) {
		await interaction.reply('https://thewitchercraft.com/');
	},
};