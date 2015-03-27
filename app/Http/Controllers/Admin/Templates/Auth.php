<?php namespace App\Http\Controllers\Admin\Templates;

use \App\Http\Controllers\Controller;

class Auth extends Controller {

	public function getLogin() {
		return \View::make('admin/auth/login');
	}

}
