const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Opis!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};