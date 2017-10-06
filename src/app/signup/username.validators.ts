import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null
    {
        if((control.value as string).indexOf(' ') >= 0 ) {
            return { cannotContainSpace: true }
        } else {
            return null;
        }
    }

    static shouldBeUnique(control: AbstractControl)  {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'ahmed')
                    resolve({ shouldBeUnique: true });
                else
                    reject(null);
            }, 2000);
        })    
    }
}