https://www.primefaces.org/diamond/icons.xhtml

Ordenar lineas = crtl+shift+p => sort lines


en -----component.ts añadir linea providers

@Component({
  selector: 'app-eco-gastos',
  templateUrl: './eco-gastos.component.html',
  styleUrls: ['./eco-gastos.component.scss'],
 
  providers: [MessageService, ConfirmationService],
})