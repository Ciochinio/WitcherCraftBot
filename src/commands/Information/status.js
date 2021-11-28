const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('status')
		.setDescription('Sprawdź status naszych usług!'),
	async execute(interaction) {
		await interaction.reply('https://stats.uptimerobot.com/RnYPLsG0mR ');
	},
};