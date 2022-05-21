import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Client {
  readonly allServicesUrl = "https://localhost:7125/api";
  constructor(private http:HttpClient) { }
  /* User İşlemleri Alanı */
  getUserList():Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + '/users');
  }

  getUserById(id:number|string):Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + `/users/${id}`);
  }
  addUser(data:any){
    return this.http.post(this.allServicesUrl + '/users',data);
  }

  updateUser(id:number|string, data:any){
    return this.http.put(this.allServicesUrl + `/users/${id}`,data);
  } 

  deleteUser(id:number|string){
    return this.http.delete(this.allServicesUrl + `/users/${id}`);
  } 

  /* User İşlemleri Alanı Sonu*/


  /* Permission İşlemleri Alanı */
  getPermissionList():Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + '/permissions');
  }

  getPermissionById(id:number|string):Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + `/permissions/${id}`);
  }
  addPermission(data:any){
    return this.http.post(this.allServicesUrl + '/permissions',data);
  }

  updatePermission(id:number|string, data:any){
    return this.http.put(this.allServicesUrl + `/permissions/${id}`,data);
  } 

  deletePermission(id:number|string){
    return this.http.delete(this.allServicesUrl + `/permissions/${id}`);
  } 

  /* Permission İşlemleri Alanı Sonu*/


  /* Contact İşlemleri Alanı */
  getContactList():Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + '/contacts');
  }

  getContactById(id:number|string):Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + `/contacts/${id}`);
  }
  addContact(data:any){
    return this.http.post(this.allServicesUrl + '/contacts',data);
  }

  updateContact(id:number|string, data:any){
    return this.http.put(this.allServicesUrl + `/contacts/${id}`,data);
  } 

  deleteContact(id:number|string){
    return this.http.delete(this.allServicesUrl + `/contacts/${id}`);
  } 

  /* Contact İşlemleri Alanı Sonu*/

  
  /* Category İşlemleri Alanı */

  getCategoryList():Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + `/categories`);
  }

  getCategoryById(id:number|string):Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + `/categories/${id}`);
  }
  addCategory(catName:any){
    return this.http.post(this.allServicesUrl + `/categories`,catName);
  }

  updateCategory(id:number|string, data:any){
    return this.http.put(this.allServicesUrl + `/categories/${id}`,data);
  } 

  deleteCategory(id:number|string){
    return this.http.delete(this.allServicesUrl + `/categories/${id}`);
  } 

  /* Category İşlemleri Alanı Sonu*/

   /* Article İşlemleri Alanı */
   getArticleList():Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + '/articles');
  }

  getArticleById(id:number|string):Observable<any[]>{
    return this.http.get<any>(this.allServicesUrl + `/articles/${id}`);
  }
  addArticle(data:any){
    return this.http.post(this.allServicesUrl + '/articles',data);
  }

  updateArticle(id:number|string, data:any){
    return this.http.put(this.allServicesUrl + `/articles/${id}`,data);
  } 

  deleteArticle(id:number|string){
    return this.http.delete(this.allServicesUrl + `/articles/${id}`);
  } 

  /* Article İşlemleri Alanı Sonu*/

  /* export classes */
  

   /* export classes */

}
