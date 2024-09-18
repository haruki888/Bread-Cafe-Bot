module ApplicationHelper
  def full_title(page_name = "")
    base_title = "BreadCoffeeRecipes"
    if page_name.emptly?
      base_title
    else
      page_name + " | " + base_title
    end
  end
end
