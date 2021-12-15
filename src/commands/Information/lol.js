const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lol')
		.setDescription("lol!"),
	async execute(interaction) {
		await interaction.reply('lol');
	},
};