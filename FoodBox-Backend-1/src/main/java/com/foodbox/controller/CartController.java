package com.foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.entity.Cart;
import com.foodbox.service.CartService;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin("http://localhost:4200/")
public class CartController {

	@Autowired
	private CartService service;
	
	@PostMapping("/addToCart")
	public ResponseEntity<Object> addToCart(@RequestBody Cart cart){
		Cart createdCart = service.addToCart(cart);
		if(createdCart != null) {
			return new ResponseEntity<Object> (createdCart, HttpStatus.CREATED);
		}
		else {
			return new ResponseEntity<Object> ("Error while adding Item", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	} 
	
	@GetMapping("/allCartItems")
	public List<Cart> getAll(){
		return service.getAllCartItems();
	}
	
	
	@GetMapping("/getById/{id}")
	public Cart getById(@PathVariable int id) {
		return service.getCartById(id);
	}
	
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		service.delete(id);
	}
}