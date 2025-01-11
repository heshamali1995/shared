import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  fallback = false;
  onShareMobile = () => {
    let productURL = window.location.href;
    let title = document.title;
    if (typeof navigator.share === 'function') {
      navigator
        .share({
          title: title,
          url: productURL,
        })
        .catch((error: any) => {
          console.log('error', error);
          window.alert(`error happens ${error}`);
        });
    } else {
      console.log('fallback');
      window.alert('fallback new happens');
      this.onShareDesktop();
    }
  };
  onShareDesktop = () => {
    window.alert('desktop opened');
  };
}
