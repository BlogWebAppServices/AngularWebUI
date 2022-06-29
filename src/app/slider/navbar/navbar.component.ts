import { Component, OnInit, } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Client } from 'src/app/allservices-api.service';
import { map, Observable } from 'rxjs';
import { right } from '@popperjs/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categoryList$!: Observable<any[]>;
  childCategoryList$!: Observable<any[]>
 
  public logo = ("../../../assets/img/logowhite.png");

  constructor(
    private service: Client
  ) { }
  

  menuVariable: boolean = false;

  menu_icon_variable: boolean = false;

  onload() {
    this.categoryList$ = this.service.getCategoryList();
    this.childCategoryList$ = this.service.getChildCategoryList();
  }

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  ngOnInit(): void {
    this.onload();
    this.visibleOtherCategories();
    this.visibleChildCategories();

    this.categoryList$.pipe(map((categories: any[]) => {
      return categories.map(category => ({
        id: category.id,
      }))
    }))
  }

  visibleOtherCategories() {
    this.categoryList$.subscribe(res => {
      if (res.length < 8) {
        document.getElementById("otherCategories")?.remove();
      }
    })
  }

  listChildCategories(id:any){
      this.childCategoryList$.subscribe(getChildCategories=>{
          getChildCategories.forEach(childCategories=>{
            if(childCategories.categoryId==id){
              var childCategory =document.getElementById("childCategoryId"+childCategories.id);
              childCategory!.style.display = 'flex';
            }
            else{
              var childCategory =document.getElementById("childCategoryId"+childCategories.id);
              childCategory!.style.display = 'none';
            }
          })
      })
  
  }

  visibleChildCategories() {
    this.categoryList$.subscribe(getCategories=>{
      this.childCategoryList$.subscribe(getChildCategories=>{
        getCategories.forEach(categories=>{
          var control = true
         getChildCategories.forEach(childCategories=>{
            if(categories.id == childCategories.categoryId){
              document.getElementById("categoryLink"+categories.id)?.remove();
              control=false
            }
         })
         if(control){
          document.getElementById("childCategoryDropdown"+categories.id)?.remove();
        }
        }) 
      })
    })


    // this.categoryList$.subscribe(getCategories=>{
    //   this.childCategoryList$.subscribe(getChildCategories=>{
    //     getCategories.forEach(categories=>{
    //       getChildCategories.forEach(childCategories=>{
    //           if(categories.id==childCategories.categoryId){
    //             console.log("Category Name"+" "+categories.categoryName)
    //             console.log("Child Category Name"+" "+childCategories.categoryName)
    //           }
    //           else{
    //             console.log("Category Name"+" "+categories.categoryName)
    //           }

    //       })
    //     })
    //   })
    // })


    // this.categoryList$.subscribe(getCategories=>{
    //   this.childCategoryList$.subscribe(getChildCategories=>{
    //         getCategories.forEach(categories=>{
    //           getChildCategories.forEach(childCategories=>{

    //             if(categories.id == childCategories.categoryId){
    //               console.log("category name:"+" "+categories.categoryName +"/"+ "child category name:"+""+ childCategories.categoryName)
    //             }
    //             if(childCategories != null && categories.id == childCategories.categoryId){
    //               document.getElementById("categoryLink"+categories.id)?.remove();
    //             }else{
    //               document.getElementById("childCategoryDropdown"+categories.id)?.remove();
    //               console.log("deleted dropdown:"+" "+categories.categoryName)
    //             }

    //           })
    //         })
    //   })
    // })

    // if(categories.id == childCategories.categoryId){
    //   console.log("Category Adı: "+" "+categories.categoryName)
    //   console.log("Child Category Adı: "+" "+childCategories.categoryName)
    // }else{
    //   console.log("Category Adı: "+" "+categories.categoryName)
    // }


    // this.categoryList$.subscribe(category=>{
    //   this.childCategoryList$.subscribe(childCategory=>{
    //   for(var i = 0; i<category.length; i++){
    //     console.log("Category Id"+" "+category[i].categoryName)
    //     for(var j = 0; j<childCategory.length; j++){
    //       if(category[i].id == childCategory[j].categoryId){
    //         console.log("Child Category Id"+" "+childCategory[j].categoryName);
    //         document.getElementById("categoryLink"+category[i].id)?.remove();
    //         break;
    //       }
    //       else if(category[i].id != childCategory[j].categoryId){
    //         document.getElementById("childCategoryDropdown"+category[i].id)?.remove();
    //         break;
    //       }
    //     }
    //   }
    //   })
    // })


    // this.childCategoryList$.subscribe(childCategory=>{
    //   this.categoryList$.subscribe(category=>{
    //     while(this.categoryCount<category.length){
    //       if(childCategory.length>0){
    //         document.getElementById("categoryLink")?.remove();
    //       }
    //       else{
    //         document.getElementById("childCategoryDropdown")?.remove();
    //       }
    //       this.categoryCount = this.categoryCount + 1
    //     }
    //   })
    // })

  }
}
