function diamond(val) {

    doubleit = val * 2;
    document.write('<center>');
    for (i = 0; i < doubleit; i++) {
        if (i < val) {
            for (j = 0; j < i; j++) {
                document.write('*');
            }
        }
        if (i >= val) {
            for (j = doubleit; j > i; j--) {
                document.write('*');
            }
        }

        document.write('<br>');
    }

    document.write('</center>');
}