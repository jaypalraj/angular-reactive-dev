import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CommonHelper{

    handleServiceError(err:any){
        let errorMessage: string;
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else{
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }

}