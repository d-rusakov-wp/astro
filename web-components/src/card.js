// paymentForm.js
class PaymentForm {
	constructor() {
			this.initializeHTML();
			this.initializeStyles();
			this.initializeValidator();
	}

	initializeHTML() {
			const container = document.createElement('div');
			container.className = 'payment-form-container';

			container.innerHTML = `
					<form id="paymentForm">
							<div class="form-group">
									<label for="cardNumber">Номер карты:</label>
									<input type="text" id="cardNumber" placeholder="0000 0000 0000 0000">
									<span class="error" id="cardError"></span>
							</div>

							<div class="form-group">
									<label for="cardOwner">Имя владельца:</label>
									<input type="text" id="cardOwner" placeholder="Иванов Иван Иванович">
							</div>

							<div class="form-group">
									<label for="expirationDate">Срок действия:</label>
									<input type="text" id="expirationDate" placeholder="ММ/ГГ">
							</div>

							<div class="form-group">
									<label for="cvv">CVV:</label>
									<input type="text" id="cvv" placeholder="000">
							</div>

							<button type="submit">Оплатить</button>
					</form>
			`;

			document.body.appendChild(container);
	}

	initializeStyles() {
			const style = document.createElement('style');
			style.textContent = `
					.payment-form-container {
							max-width: 500px;
							margin: 20px auto;
							padding: 20px;
							border-radius: 8px;
							box-shadow: 0 2px 4px rgba(0,0,0,0.1);
					}

					.form-group {
							margin-bottom: 15px;
					}

					label {
							display: block;
							margin-bottom: 5px;
							font-weight: bold;
					}

					input {
							width: 100%;
							padding: 8px;
							border: 1px solid #ddd;
							border-radius: 4px;
							box-sizing: border-box;
					}

					.error {
							color: red;
							font-size: 12px;
							margin-top: 5px;
					}

					button {
							background-color: #4CAF50;
							color: white;
							padding: 10px 15px;
							border: none;
							border-radius: 4px;
							cursor: pointer;
							width: 100%;
					}

					modal-window {
							display: none;
							position: fixed;
							top: 50%;
							left: 50%;
							transform: translate(-50%, -50%);
							background: white;
							padding: 20px;
							border-radius: 8px;
							box-shadow: 0 4px 12px rgba(0,0,0,0.2);
							min-width: 300px;
							z-index: 1000;
					}
			`;
			document.head.appendChild(style);
	}

	initializeValidator() {
			const validator = new PaymentFormValidator();
	}
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
	new PaymentForm();
});
