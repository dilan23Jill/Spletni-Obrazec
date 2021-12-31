function format(input)
            {
                var nStr = input.value + '';
                nStr = nStr.replace( /\-/g, "");
                x = nStr.split( '-' );
                x1 = x[0];
                x2 = x.length > 1 ? '-' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while ( rgx.test(x1) ) {
                    x1 = x1.replace( rgx, '$1' + '-' + '$2' );
                }
                input.value = x1 + x2;
            }