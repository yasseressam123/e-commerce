import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminViewService } from '../admin-view.service';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit{

  products:any[] = [];
  loading: boolean = false;
  deleteModalDisplay:boolean = false;
  deleteBtn:boolean = false;
  prodId:number = 0;

  constructor(private adminViewService: AdminViewService,
    private router:Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
      this.getProducts();
  }

  getProducts(){
    this.adminViewService.getProducts()
    .subscribe(
      (response:any)=>{
      console.log("stores",response)
      this.products = response;
      this.loading = false;
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  onGlobalFilter(table: Table, event: Event) {

  }

  handleAddProduct(){
    
  }

  handleDelete(prodId:number){
    console.log('here')
    this.deleteModalDisplay = true;
    this.prodId = prodId;
  }
  deleteAction(){
    this.deleteBtn = true;
    this.adminViewService.deleteProduct(this.prodId)
    .subscribe(
      (response:any)=>{
      console.log(response)
      this.deleteBtn = false;
      this.deleteModalDisplay = false;
      },
      (error)=>{
        console.log(error)
        this.deleteBtn = false;
      })
  }
  cancelAction(){
    this.deleteModalDisplay=false;
  }

}
