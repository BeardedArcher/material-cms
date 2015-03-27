<?php

class Auth extends Controller {
    
    public function postLogin()
    {
        $input = Input::all();
        
        $rules = array('email' => 'required', 'password' => 'required');
        
        $v = Validator::make($input, $rules);
        
        if($v->fails())
        {
            return Redirect::to('login')->withErrors($v);
        } else {
            $credentials = array('email' => $input['email'], 'password' => $input['password']);
            
            if(Auth::attempt($credentials))
            {
                return Redirect::to('admin');
            } else {
                return Redirect::to('login');
            }
        }
    }
    
    public function logout()
    {
        Auth::logouot();
        Redirect::to('/');
    }
}

