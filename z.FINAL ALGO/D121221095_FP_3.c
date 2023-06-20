#include<stdio.h>
#include<stdlib.h>
#define Nmaks 1000

typedef struct {
    int NIM;
    char Nama[50];
} DataMhs;

typedef DataMhs TabMhs[Nmaks];

typedef struct {
    TabMhs data;
} ArsipMhs;

void BacaLarikDariPapanKetik(TabMhs M, int* jumlahData) {
    int i;
    printf("Masukkan jumlah data: ");
    scanf("%d", jumlahData);

    for (i = 0; i < *jumlahData; i++) {
        printf("Data ke-%d:\n", i + 1);
        printf("NIM: ");
        scanf("%d", &M[i].NIM);
        printf("Nama: ");
        scanf(" %[^\n]", M[i].Nama);
    }
}

void Tukar(DataMhs* a, DataMhs* b) {
    DataMhs temp = *a;
    *a = *b;
    *b = temp;
}

void PengurutanSeleksiMaksimum(TabMhs M, int jumlahData) {
    int i, j, maxIndex;
    for (i = 0; i < jumlahData - 1; i++) {
        maxIndex = i;
        for (j = i + 1; j < jumlahData; j++) {
            if (M[j].NIM < M[maxIndex].NIM) {
                maxIndex = j;
            }
        }
        Tukar(&M[i], &M[maxIndex]);
    }
}

void SimpanLarikKeArsip(FILE* F, TabMhs M, int jumlahData) {
    fseek(F, 0, SEEK_SET);
    fwrite(M, sizeof(DataMhs), jumlahData, F);
}

int main() {
    FILE* F;
    ArsipMhs Fdata;
    TabMhs M;
    int jumlahData = 0;
    char namaFile[50];
    printf("Masukkan nama file arsip: ");
    scanf("%s", namaFile);

    BacaLarikDariPapanKetik(M, &jumlahData);

    PengurutanSeleksiMaksimum(M, jumlahData);

    F = fopen(namaFile, "wb");
    if (F == NULL) {
        printf("File tidak dapat dibuka.\n");
        return 1;
    }
    SimpanLarikKeArsip(F, M, jumlahData);
    fclose(F);
    printf("Pengurutan selesai. Hasil disimpan kembali ke dalam arsip.\n");
    return 0;
}
