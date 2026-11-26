function book(){var v=id=>document.getElementById(id).value;if(!v('n')||!v('e')){alert('Please enter your name and email');return}
var b='Name: '+v('n')+'%0AEmail: '+v('e')+'%0ATicket: '+v('t')+'%0AQuantity: '+v('q')+'%0ADate: '+v('d');
location.href='mailto:kafisewonolaomo722@gmail.com?subject=Ticket%20Request%20-%20Tour%20with%20Ola&body='+b}