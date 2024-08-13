import { AbstractControl, ValidatorFn } from '@angular/forms';

export function joinDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const joinDate = new Date(control.value);
    const today = new Date();

    // Đặt giờ, phút, giây của ngày hiện tại về 0 để so sánh chính xác
    today.setHours(0, 0, 0, 0);

    return joinDate >= today
      ? null
      : { invalidJoinDate: { value: control.value } };
  };
}
