int main() {
    int n;
    printf("Enter the number of rows in the pyramid: ");
    scanf("%d", &n);
    printPiramid(n);
    return 0;
}

void printPiramid(int n) {
    int i, j;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= i; j++)
            printf("%d", (i+j-1) % 10);
        for (j = i-1; j >= 1; j--)
            printf("%d", (i+j-1) % 10);
        printf("\n");
    }
}