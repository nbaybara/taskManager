import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular';
import * as firebase from 'firebase'



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string;
  password : string;

  constructor(private toastCtrl: ToastController, private navCtrl : NavController,) { }

  ngOnInit() {
  
  }
  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      (userObject) => {
        console.log(userObject);
  
      }).catch((err) => {
  
        this.toastCtrl.create({
          message: err.message,
          duration : 3000
        }).then((toast) =>{
  
          toast.present();
        
        })
      })

  }

  goSignUp(){
    this.navCtrl.navigateRoot('/signup');
  }
}
