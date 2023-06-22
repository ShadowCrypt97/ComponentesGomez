import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `
    <!--La etiqueta ng-content me permite renderizar el contenido desde donde invocamos el componente-->
    <main>
      <h1>ALUMNOS</h1>
      <my-p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nihil vitae facilis? Deserunt obcaecati
        repellat
        consectetur, possimus velit quae commodi dolore enim beatae dolorem voluptates voluptatem ullam. Optio, illum
        officia.
      </my-p>
    </main>
  `,
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
