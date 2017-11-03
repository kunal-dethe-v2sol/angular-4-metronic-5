export class LoginCustom {

	static displaySignUpForm() {
		let login = $('#m_login');
		login.removeClass('m-login--forget-password');
		login.removeClass('m-login--signin');

		login.addClass('m-login--signup');
		(<any>login.find('.m-login__signup')).animateClass('flipInX animated');
	}

	static displaySignInForm() {
		let login = $('#m_login');
		login.removeClass('m-login--forget-password');
		login.removeClass('m-login--signup');
		try {
			$('form').data('validator').resetForm();
		} catch (e) {
		}

		login.addClass('m-login--signin');
		(<any>login.find('.m-login__signin')).animateClass('flipInX animated');
	}

	static displayForgetPasswordForm() {
		let login = $('#m_login');
		login.removeClass('m-login--signin');
		login.removeClass('m-login--signup');

		login.addClass('m-login--forget-password');
		(<any>login.find('.m-login__forget-password')).animateClass('flipInX animated');
	}

	static handleFormSwitch() {
		$('#m_login_forget_password').click(function (e) {
			e.preventDefault();
			LoginCustom.displayForgetPasswordForm();
		});

		$('#m_login_forget_password_cancel').click(function (e) {
			e.preventDefault();
			LoginCustom.displaySignInForm();
		});

		$('#m_login_signup').click(function (e) {
			e.preventDefault();
			LoginCustom.displaySignUpForm();
		});

		$('#m_login_signup_cancel').click(function (e) {
			e.preventDefault();
			LoginCustom.displaySignInForm();
		});
	}

	static init() {
		LoginCustom.handleFormSwitch();
	}
}