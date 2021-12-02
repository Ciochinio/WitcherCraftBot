const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kiedy')
		.setDescription('Dowiedź się kiedy dostępny będzie serwer WitcherCraft!'),
	async execute(interaction) {
		await interaction.reply('https://tenor.com/view/geralt-geralt-of-rivia-the-witcher-henry-cavill-handsome-gif-16019240');
	},
};