import { AbstractControl, ValidatorFn } from '@angular/forms';

export function minAgeValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const birthDate = new Date(control.value);
    const today = new Date();

    // Tính tuổi
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    // Kiểm tra tháng và ngày để xác định chính xác tuổi
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    // Nếu tuổi nhỏ hơn yêu cầu, trả về lỗi
    return age >= minAge ? null : { minAge: { value: control.value } };
  };
}
