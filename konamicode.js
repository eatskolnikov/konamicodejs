var KonamiCodeListener =
{
    init: function(onsuccess=function(){}, onfail=function(){})
    {
        window.addEventListener("keydown", this._keyPressEventListener(onsuccess, onfail, this));
        return this;
    },
    destroy: function()
    {
        window.removeEventListener("keydown", this._keyPressEventListener);
        _userInput.length = 0;
        return this;
    },
    _keyPressEventListener: function(onsuccess, onfail, self)
    {
        return function(e)
        {
            self._processEntry(e.keyCode, self, onsuccess, onfail);
        }
    },
    
    _sequence: [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ],
    _userInput: [],
    _processEntry: function(keyCode, self, onsuccess, onfail)
    {
        switch (keyCode)
        {
            case 37:
            case 38:
            case 39:
            case 40:
            case 65:
            case 66:
                self._userInput.push(keyCode);
                console.log(keyCode);
                break;
            default:
                self._userInput.length = 0;
                return;
        }

        if(self._sequence.length != self._userInput.length) return;

        for ( var i = 0; i < self._userInput.length; i++ )
        {
            if ( self._userInput[i] != self._sequence[i] )
            {
                self._userInput.length = 0;
                onfail();
                return;
            }
        }
        self._userInput.length = 0;
        onsuccess();
    }
};
