const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('geralt')
		.setDescription('GeraltJAM!'),
	async execute(interaction) {
		await interaction.reply('https://imgur.com/t/geralt_of_rivia/4y2CPqO');
	},
};