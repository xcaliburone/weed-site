#include <stdio.h>

int main() {
    int uang, seribu, lima_ratus, seratus, lima_puluh, dua_puluh_lima;

    // Meminta pengguna memasukkan nilai uang
    printf("Masukkan nilai uang dalam kelipatan 25: ");
    scanf("%d", &uang);

    // Menghitung pecahan Rp.1000
    seribu = uang / 1000;
    uang = uang - seribu * 1000;

    // Menghitung pecahan Rp.500
    lima_ratus = uang / 500;
    uang = uang - lima_ratus * 500;

    // Menghitung pecahan Rp.100
    seratus = uang / 100;
    uang = uang - seratus * 100;

    // Menghitung pecahan Rp.50
    lima_puluh = uang / 50;
    uang = uang - lima_puluh * 50;

    // Menghitung pecahan Rp.25
    dua_puluh_lima = uang / 25;

    // Menampilkan hasil
    printf("Nilai tukar pecahan:\n");
    printf("Rp.1000: %d\n", seribu);
    printf("Rp.500: %d\n", lima_ratus);
    printf("Rp.100: %d\n", seratus);
    printf("Rp.50: %d\n", lima_puluh);
    printf("Rp.25: %d\n", dua_puluh_lima);

    return 0;
}
