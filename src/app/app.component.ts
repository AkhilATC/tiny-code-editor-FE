import { Component, OnInit } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';
import { NetworkService } from './network.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tiny-code-playground';
  theme = 'vs-dark'; //vs-dark hc
  public isPython = false;
  selectedLanguage: any;
  codeString: string ;
  resultsArray = [];
  public isNotError : boolean = true;
  public status:string = "Tiny🕹️ Status: Ready"
  public langsAllowed =[{
    "name":"python",
    "icon":"py",
    "file": "demo.py",
    "fileFormat":"python"
  },
  {
    "name":"java",
    "icon":"py",
    "file": "demo.java",
    "fileFormat":"java"
  }
]
  movies: any;
constructor(
  private _NetworkService:NetworkService
 
) { }

  codeModel: CodeModel = {
    language: 'java',
    uri: 'main.py',
    value: ''
  };
 

  options = {
    contextmenu: true,
    minimap: {
      enabled: true 
    }
  };

  onCodeChanged(value) {
    //console.log('CODE', value);
    this.codeString = value;
    //console.log(this.selectedLanguage)
   // console.log("-----------")
   
  };
  public saveBteArray() {
    if(this.selectedLanguage){
      var blob = new Blob([this.codeString], {type: "text/plain"});
      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      var fileName = this.selectedLanguage.file;
      link.download = fileName;
      link.click();
    }
    
};
changeModelValues(){
  if(this.selectedLanguage.name === 'python'){
    this.isPython = true;
  }
}
ngOnInit(): void {
 
}
executeCode(){
  this.status = "Tiny🕹️ Status: Executing"
  if(this.selectedLanguage['name']=="java"){
    var firstLine = this.codeString.split('\n', 1)[0];
   // firstLine.match()
    console.log("===========haha"+firstLine)
  }
  let payloads = {'lang':this.selectedLanguage,'code':this.codeString}
  this._NetworkService.sentCodeToRunServer(payloads)
        .subscribe((data)=>{
          console.log(data);
          this.status = "Tiny🕹️ Status: success ⭐"
          this.resultsArray = data['output'];
          this.isNotError = data['status']
          //this.writeEventEmitter("Your note sucessfully writed 📝");
          
        },error  => {
          console.log(error)
          this.status = "Tiny🕹️ Status: Failed 🔴"
          this.isNotError = false;
          //this.writeEventEmitter("Failed to write your note: pls check payloads 🔴");
          
          });
}
  
}
