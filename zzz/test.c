#include <stdio.h>
#include <stdlib.h>

int main() {
    int tanggal_pertama, bulan_pertama, tahun_pertama;
    int tanggal_kedua, bulan_kedua, tahun_kedua;
    int jumlah_hari_pertama, jumlah_hari_kedua, selisih_hari;
    int tahun, bulan, hari;

    // Baca tanggal pertama
    printf("Masukkan tanggal pertama (dd:mm:yy): ");
    scanf("%d:%d:%d", &tanggal_pertama, &bulan_pertama, &tahun_pertama);

    // Baca tanggal kedua
    printf("Masukkan tanggal kedua (dd:mm:yy): ");
    scanf("%d:%d:%d", &tanggal_kedua, &bulan_kedua, &tahun_kedua);

    // Hitung jumlah hari untuk tanggal pertama
    jumlah_hari_pertama = tahun_pertama * 365 + bulan_pertama * 30 + tanggal_pertama;

    // Hitung jumlah hari untuk tanggal kedua
    jumlah_hari_kedua = tahun_kedua * 365 + bulan_kedua * 30 + tanggal_kedua;

    printf("\nJumlah hari pertama adalah : %d", jumlah_hari_pertama);
    printf("\nJumlah hari kedua adalah : %d", jumlah_hari_kedua);

    // Hitung selisih hari antara dua tanggal
    selisih_hari = abs(jumlah_hari_pertama - jumlah_hari_kedua);

    // Hitung jumlah tahun dalam selisih hari
    tahun = selisih_hari / 365;
    selisih_hari = selisih_hari - (tahun * 365);

    // Hitung jumlah bulan dalam selisih hari
    bulan = selisih_hari / 30;
    selisih_hari = selisih_hari - (bulan * 30);

    // Sisa selisih hari adalah hari
    hari = selisih_hari;

    // Tampilkan hasil jarak dalam format "tahun bulan hari"
    printf("\nJarak antara dua tanggal adalah: %d tahun %d bulan %d hari\n", tahun, bulan, hari);

    return 0;
}
