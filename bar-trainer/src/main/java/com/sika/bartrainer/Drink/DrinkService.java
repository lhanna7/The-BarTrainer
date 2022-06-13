package com.sika.bartrainer.Drink;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DrinkService {
  @Autowired
  private DrinkRepository drinkRepository;

  public Iterable<Drink> list() {
    return drinkRepository.findAll();
  }

  public Optional<Drink> findById(Long id) {
    return drinkRepository.findById(id);
  }

  public Drink create(Drink drink) {
    return drinkRepository.save(drink);
  }

  public Optional<Drink> update(Drink drink) {
    Optional<Drink> foundResource = drinkRepository.findById(drink.getId());

    if (foundResource.isPresent()) {
      Drink updatedResource = foundResource.get();
      updatedResource.setSomeProperty(drink.getSomeProperty());

      drinkRepository.save(updatedResource);
      return Optional.of(updatedResource);
    } else {
      return Optional.empty();
    }
  }

  public void deleteById(Long id) {
    drinkRepository.deleteById(id);
  }
}
