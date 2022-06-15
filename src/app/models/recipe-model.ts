export class RecipeModel {
    'uuid': String;
    'title': String;
    'description': String;
    'servings': Number;
    'prepTime': Number;
    'cookTime': Number;
    'postDate': Date;
    'editDate': Date;
    'ingredients': {
        'uuid': String;
        'amount': Number;
        'measurement': String;
        'name': String;
    };
    'directions': {
        'instructions': String;
        'optional': Boolean;
    }
}