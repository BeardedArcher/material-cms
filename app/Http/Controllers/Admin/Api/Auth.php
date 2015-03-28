<?php namespace App\Http\Controllers\Admin\Api;

use \App\Http\Controllers\Controller;
use \Input;

class Auth extends Controller {
    
    public function postLogin()
    {
        $email = Input::get('email');
        $password = Input::get('password');
        
       if(\Auth::attempt(['email' => $email, 'password' => $password]))
       {
           echo 'zalogowany';
       } else {
           echo 'bledne logowanie';
       }
    }
    
    public function logout()
    {
        Auth::logouot();
        Redirect::to('/');
    }
}

