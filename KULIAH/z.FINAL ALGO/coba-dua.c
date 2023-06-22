#include<stdio.h>

int main (){
    int i, j;
    int a = 0;

    for( i = 1; i < 11; ++i )
        for ( j = 11; j < 21; j++ ){
        a = a + 2;
        printf("%d %d \n", i, a);
    }return 0;
}