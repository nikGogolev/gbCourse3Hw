
const configMillion = {
	numberOfQuestions: 0
}

const userMillion = {
	userName: '',
	score: 0
}

const questions = [
	{
		question: 'Какое насекомое вызвало короткое замыкание в ранней версии вычислительной машины, тем самым породив термин «компьютерный баг» («баг» в переводе с англ. «насекомое»)?',
		caseA: 'Мотылек',
		caseB: 'Таракан',
		caseC: 'Муха',
		caseD: 'Японский хрущик',
		rightAnswer: 'A'
	},
	{
		question: 'Под каким названием известна единица с последующими ста нулями?',
		caseA: 'Мегатрон',
		caseB: 'Гигабит',
		caseC: 'Гугол',
		caseD: 'Наномоль',
		rightAnswer: 'C'
	},
	{
		question: 'Какой химический элемент составляет более половины массы тела человека?',
		caseA: 'Углерод',
		caseB: 'Кальций',
		caseC: 'Железо',
		caseD: 'Кислород',
		rightAnswer: 'D'
	},
	{
		question: 'Какая единица измерения названа в честь итальянского дворянина?',
		caseA: 'Паскаль',
		caseB: 'Вольт',
		caseC: 'Ом',
		caseD: 'Герц',
		rightAnswer: 'B'
	},
	{
		question: 'Что означает гавайское слово «вики», которое дало название интернет-энциклопедии «Википедия»?',
		caseA: 'Простой',
		caseB: 'Изученный',
		caseC: 'Быстрый',
		caseD: 'Маленький',
		rightAnswer: 'C'
	}
]

let millionaire = {

	run() {
		while (true) {

			for (question of questions) {
				let userAnswer = (prompt(`${question.question}\n Варианты ответов:\n A: ${question.caseA}\n B: ${question.caseB}\n C: ${question.caseC}\n D: ${question.caseD}`));
				if (userAnswer === null || userAnswer === '') {
					return;
				} else if (userAnswer.toUpperCase() === question.rightAnswer) {
					millionaire.scoreUp();
					if (userMillion.score === configMillion.numberOfQuestions) {
						let win = confirm(`Поздравляю, ${userMillion.userName}, Вы выиграли! \n Чтобы сыграть снова нажмите OK, для выхода нажмите ОТМЕНА`);
						if (win){
							millionaire.init();
						} else {
							return;
						}
						return;
					}
					alert(`Верный ответ, ${userMillion.userName}! Количество правильных ответов ${userMillion.score} из ${configMillion.numberOfQuestions}`);
				} else {
					alert('Это неверный ответ! Вы проиграли!');
					return;
				}
			}

		}

	},

	init() {
		configMillion.numberOfQuestions = questions.length;
		userMillion.score = 0;
		userMillion.userName = prompt('Введите Ваше имя');
		millionaire.run();
	},

	scoreUp() {
		return userMillion.score++;
	}
}