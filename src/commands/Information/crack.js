const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crack')
		.setDescription("Pobieranie wersji offline WitcherCraft'a"),
	async execute(interaction) {
		await interaction.reply("Crackowana wersja Minecraft'a nie jest wspierana przez twórców serwera WitcherCraft. Żeby grać na serwerze potrzebna jest oficjalna wersja gry z możliwością zalogowania się przez konto Microsoft. ");
	},
};