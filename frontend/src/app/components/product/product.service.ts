import { Injectable } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { HttpClient } from '@angular/common/http';

import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { ProductCreateComponent } from './product-create/product-create.component';

import { map, catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ProductService {

    //URL da API
    baseUrl = "http://localhost:3001/products";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }

    errorHandler(e: any): Observable<any> {
        this.showMessage('Ocorreu um erro', true)
        return EMPTY
    }

    //Método para inserir no DB
    create(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl, product).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        )
    }

    
    //Método para listar todos os produtos
    read(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl)
    }

    //Método para ver um produto
    readById(id: number): Observable<Product> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Product>(url)
    } 

    //Método para alterar um produto
    update(product: Product): Observable<Product> {
        const url = `${this.baseUrl}/${product.id}`
        return this.http.put<Product>(url, product)
    }

    //Método para excluir um produto
    delete(id: number): Observable<Product> {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Product>(url)
    }

}
