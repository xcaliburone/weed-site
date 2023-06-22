#include <stdio.h>

int a = 5;
int b = 9;

void tukar() {
    b = a - b;
    a = a + b;
    a = a - b;
    printf("\nNilai sesudah : %d %d", a, b );
}

int main(){
    printf("Nilai sebelum : %d %d", a, b );
    tukar();
}