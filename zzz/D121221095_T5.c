#include <stdio.h>
#include <stdlib.h>

struct data {
    char IndeksNilai;
    int SKS;
};

int Konversi(char Nilai, int* NilaiKonversi);

int main() {
    int M, N;
    int JmlhSKS = 0, JmlhNilai = 0;

    printf("Masukkan jumlah Mahasiswa   : ");
    scanf("%d", &M);
    printf("Masukkan jumlah Mata Kuliah : ");
    scanf("%d", &N);

    struct data NilaiMhs[M][N];
    float NR[N];

    for (int i = 0; i < M; i++) {
        printf("\nMahasiswa ke- %d\n", i+1);

        for (int j = 0; j < N; j++) {
            printf("Masukkan nilai MataKuliah %d : ", j+1);
            getchar();
            NilaiMhs[i][j].IndeksNilai = getchar();
            char Nilai = NilaiMhs[i][j].IndeksNilai;
            int NilaiKonversi = 0;
            
            Konversi(Nilai, &NilaiKonversi);
            
            printf("Masukkan Jumlah SKS : ");
            scanf("%d", &NilaiMhs[i][j].SKS);
            JmlhNilai += NilaiKonversi*NilaiMhs[i][j].SKS;
            JmlhSKS += NilaiMhs[i][j].SKS;
        }
        NR[i] = (float)JmlhNilai / (float)JmlhSKS;
    }

    printf("\nNIlai rata-rata (IP) Mahasiswa : \n");
    for (int i = 0; i < M; i++){
        printf("Nilai rata-rata (IP) Mahasiswa %d adalah %.1f\n", i+1, NR[i]);
    }
    return 0;
}

int Konversi(char Nilai, int* NilaiKonversi) {
    switch (Nilai) {
        case 'A':
            *NilaiKonversi = 4;
            break;
        case 'B':
            *NilaiKonversi = 3;
            break;
        case 'C':
            *NilaiKonversi = 2;
            break;
        case 'D':
            *NilaiKonversi = 1;
            break;
        case 'E':
            *NilaiKonversi = 0;
            break;
        default:
            printf("Nilai yang dimasukkan tidak valid\n");
            exit(1);
    }
}