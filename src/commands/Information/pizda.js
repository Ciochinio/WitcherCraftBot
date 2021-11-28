const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pizda')
		.setDescription('pizda rozjebana jak rękaw magika!'),
	async execute(interaction) {
		await interaction.reply('juz działa przepraszam!');
	},
};